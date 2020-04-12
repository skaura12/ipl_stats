function generateSelector(domNode) {
    if (domNode.id)
        return "#" + domNode.id;

    if (domNode.classList.length) {
        let classSelector = "." + Array.from(domNode.classList).join(".");
        let nodeList = document.querySelectorAll(classSelector);
        if (nodeList.length === 1)
            return classSelector;
    }

    let childNodes = Array.from(domNode.children);
    let siblingIndex = 0;
    for (let i = 0; i < childNodes.length; ++i) {

        if (childNodes[i].nodeName === domNode.nodeName)
            siblingIndex += 1;

        if (childNodes[i].node === domNode) {
            let selector = domNode.nodeName + ":nth-of-type(" + siblingIndex + ")";
            let nodeList = document.querySelectorAll(selector);
            if (nodeList.length === 1)
                return generateSelector(domNode.parentNode) + " > " + selector;
        }
    }
}
function nodeAndChildrenSelector(node) {
    generateSelector(node);
    Array.from(document.querySelector("#my_wrapper").children).forEach((ele) => {
        nodeAndChildrenSelector(ele);
    })
}

nodeAndChildrenSelector(document.querySelector("#my_wrapper"));


