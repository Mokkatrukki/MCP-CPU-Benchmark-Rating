import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import puppeteer from 'puppeteer';

// Create server instance
const server = new McpServer({
  name: "cpubenchmark-rating",
  version: "1.0.0",
});

// Get CPU benchmark rating tool
server.tool(
  "get_cpu_rating",
  "Get CPU benchmark multithread rating",
  {
    cpu_name: z.string().describe("The name of the CPU to get rating for (e.g., 'Intel+Core+i7-1165G7')"),
  },
  async ({ cpu_name }) => {
    try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      
      // Navigate to the CPU benchmark page
      const url = `https://www.cpubenchmark.net/cpu.php?cpu=${cpu_name}`;
      await page.goto(url);
      
      // Wait for the rating element to be available
      await page.waitForSelector('#main_content > div.wrapper > div.main-cmps > div:nth-child(2) > div.ov-scroll > div > div.right-desc > div:nth-child(3)');
      
      // Get the rating
      const rating = await page.$eval(
        '#main_content > div.wrapper > div.main-cmps > div:nth-child(2) > div.ov-scroll > div > div.right-desc > div:nth-child(3)',
        (element) => element.textContent
      );
      
      await browser.close();
      
      return {
        content: [
          {
            type: "text",
            text: `CPU Multithread Rating for ${cpu_name.replace(/\+/g, ' ')}: ${rating}`,
          },
        ],
      };
    } catch (error: any) {
      return {
        content: [
          {
            type: "text",
            text: `Error getting CPU rating: ${error.message}`,
          },
        ],
      };
    }
  },
);

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("CPU Benchmark Rating MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});