function getPath(el)
{
    if (el.nodeType !== Node.ELEMENT_NODE) return "";

    let steps = [];
    for(let contextEl = el; contextEl; contextEl = contextEl.parentNode) {
        let step = (function () {
            if (Node.ELEMENT_NODE !== contextEl.nodeType) return null;

            let id = contextEl.getAttribute("id");
            let nodeName = contextEl.nodeName.toLowerCase();

            if (id) return nodeName.toLowerCase() + "#" + id;

            if (!contextEl.parentNode || Node.DOCUMENT_NODE === contextEl.parentNode.nodeType)
                return nodeName.toLowerCase();

            let prefixedOwnClassNamesArray = (contextEl.getAttribute("class") == null) ? [] :
                contextEl.getAttribute("class").split(/\s+/g).filter(Boolean).map(name => "$" + name);

            let needsClassNames = false;
            let needsNthChild = false;
            let ownIndex = -1;
            let siblings = contextEl.parentNode.children;
            for (let i = 0; (ownIndex === -1 || !needsNthChild) && i < siblings.length; ++i) {
                let sibling = siblings[i];
                if (sibling === contextEl) {
                    ownIndex = i;
                    continue;
                }
                if (needsNthChild) continue;
                if (sibling.nodeName.toLowerCase() !== nodeName.toLowerCase()) continue;

                needsClassNames = true;
                let ownClassNames = prefixedOwnClassNamesArray;
                let ownClassNameCount = 0;
                for (let name in ownClassNames)
                    ++ownClassNameCount;
                if (ownClassNameCount === 0) {
                    needsNthChild = true;
                    continue;
                }
                let siblingClassNamesArray = (sibling.getAttribute("class") == null) ? [] :
                    sibling.getAttribute("class").split(/\s+/g).filter(Boolean).map(name => "$" + name);
                for (let j = 0; j < siblingClassNamesArray.length; ++j) {
                    let siblingClass = siblingClassNamesArray[j];
                    if (ownClassNames.indexOf(siblingClass)) continue;
                    delete ownClassNames[siblingClass];
                    if (!--ownClassNameCount) {
                        needsNthChild = true;
                        break;
                    }
                }
            }

            let result = nodeName.toLowerCase();
            if (contextEl === el && nodeName.toLowerCase() === "input"
                && contextEl.getAttribute("type")
                && !contextEl.getAttribute("id")
                && !contextEl.getAttribute("class"))
                result += "[type=\"" + contextEl.getAttribute("type") + "\"]";
            if (needsNthChild) {
                result += ":nth-child(" + (ownIndex + 1) + ")";
            } else if (needsClassNames) {
                for (let prefixedName in prefixedOwnClassNamesArray)
                    result += "." + prefixedOwnClassNamesArray[prefixedName].substr(1);
            }

            return result;
        })();

        if (!step) break;
        steps.push(step);
    }
    return steps.reverse().join(">");
}
