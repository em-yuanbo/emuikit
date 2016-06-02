import React from 'react';

function bondControls(children,matcher,replacer){
  var newChildren = React.Children.map(children,child=>{
    if(React.isValidElement(child)){
      var newchild = null;
      if(matcher(child)){
        newchild = replacer(child);
      }else{
        newchild = React.cloneElement(child,{children:bondControls(child.props.children,matcher,replacer)});
      }
      return newchild;
    }
    return child;
  });
  return newChildren;
}
function replace(children,matcher,replacer){
  return bondControls(children,matcher,replacer);
}

export {replace};
