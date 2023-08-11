declare module 'puppeteer' {
  export = puppeteer;
}

declare namespace puppeteer {
  interface ScreenshotOptions {
    path?: string;
    type?: string;
    quality?: number;
    fullPage?: boolean;
    clip?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    omitBackground?: boolean;
    encoding?: string;
    captureBeyondViewport?: boolean;
    fromSurface?: boolean;
  }

  class Page {
    screenshot(
      options?: ScreenshotOptions & { encoding: 'base64' }
    ): Promise<string>;
  }
}

export = puppeteer;
