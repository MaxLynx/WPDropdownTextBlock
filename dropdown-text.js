wp.blocks.registerBlockType('max-lynx/dropdown-text', {
    title: 'Dropdown Text',
    icon: 'admin-multisite',
    category: 'common',
    attributes: {
        title: {type: 'string'},
        description: {type: 'string'},
        display: {type: 'string'}
    },
    edit: function(props){
            props.attributes.display = 'none';

            function updateTitle(event) {
                props.setAttributes({title: event.target.value})
            }

            function updateDescription(event) {
                props.setAttributes({description: event.target.value})
            }

            return wp.element.createElement("div", null, 
            wp.element.createElement("p", null, "Title:"),
            wp.element.createElement("input", {
                    type: "text",
                    value: props.attributes.title,
                    onChange: updateTitle
                }), 
            wp.element.createElement("br", null), 
            wp.element.createElement("p", null, "Short description:"),
            wp.element.createElement("input", {
                    type: "text",
                    value: props.attributes.description,
                    onChange: updateDescription
                }));
    },
    save: function(props) {
                
        const getFunctionBody = (fullFunction) => {
            const bodyStart = fullFunction.indexOf("{") + 1
            const bodyEnd = fullFunction.lastIndexOf("}")
            return fullFunction.substring(bodyStart, bodyEnd)
        }

        function showHiddenText() {
            Array.from(document.getElementsByClassName("hidden-p"))
                    .forEach(paragraph => 
                    {
                        if(paragraph.parentElement==event.target.parentElement){
                            if(paragraph.style.display=="none"){
                                paragraph.style.display="block";
                            }
                            else {
                                paragraph.style.display="none";
                            }
                        return;
                        }            }
                    )
        }
        return wp.element.createElement("div", null, 
                wp.element.createElement("button", {
                    class: "show-button",
                    style: "display: inline; border-radius: 50%; background-color: black; color: white;",
                    onClick: getFunctionBody(showHiddenText.toString())
                    //only static content could be created here
                    }, ">"), 
                wp.element.createElement("h3", {
                    style: "text-weight: bold"
                    }, props.attributes.title), 
                wp.element.createElement("p", {
                    class: "hidden-p",
                    style: "display: " + props.attributes.display + ";"
                    }, props.attributes.description));
    }
});