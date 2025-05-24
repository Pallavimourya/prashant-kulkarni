import { JQuery } from 'jquery'

declare module 'magnific-popup' {
  interface MagnificPopupOptions {
    type?: string;
    mainClass?: string;
    removalDelay?: number;
    preloader?: boolean;
    fixedContentPos?: boolean;
    iframe?: {
      patterns: {
        [key: string]: {
          index: string;
          id: string;
          src: string;
        };
      };
    };
  }

  interface JQueryWithMagnificPopup extends JQuery {
    magnificPopup(options?: MagnificPopupOptions): JQueryWithMagnificPopup;
    magnificPopup(action: string): JQueryWithMagnificPopup;
  }
}

declare module 'magnific-popup/dist/magnific-popup.css' {
  const content: any;
  export default content;
} 