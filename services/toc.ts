import { TOCList } from "@/types/toc-tree.type";
import { JSDOM } from "jsdom";
export const getTOCTree = (html_code: string) => {
  const doc_dom = new JSDOM(html_code);
  const all_headers =
    doc_dom.window.document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  const result: TOCList = [];
  for (let i = 0; i < all_headers.length; i++) {
    const level = parseInt(all_headers[i].tagName.replace("H", ""));
    result.push({
      level: level,
      id: all_headers[i].id,
      title: all_headers[i].textContent!,
    });
  }
  return result;
};
