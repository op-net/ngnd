export interface NetworkData {
  networkName: string;
  nodesNumber: number;
  linksNumber: number;
  folderPath: string;
  xmlFile: string;
  jsonFile: string;
  htmlFile: string;
  others: {
    versionName: string;
    jsonFile: string;
    xmlFile: string;
  }[];
  examples: {
    description: string;
    pngFile: string;
  }[];
}
