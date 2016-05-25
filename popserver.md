# popup/downlist/dialog/tip


##总体构思
  模仿x-window，由client,server,windowmanager组成，
  
  client发起申请调用，server管理当前的popup层级，负责新层的层级安排和老层级的替换清除等工作
  
  clent发起时，传入当前的层级属性，如果非嵌套，传顶层


##层级管理
  固定层级：tip: 总在最前层，不被dialog/popup覆盖

  同层级相互顶替
  
  层级以`树`的形式存在,即:每个弹层都有自己的parent层,通过parent层计算新层的层级:如
    # 顶层有3个地方有popup,记为a0,a1,a2
    # a0 popup可弹出dialog,a0-b
    #  dialog a0-b可再弹出popup,a0-b-c0
    # a1 popup可弹出2个dialog, a1-b0,a1-b1
    #  a1-b0可弹出 popup,a1-b0-c
    #  a1-b0可弹出 dialog, a1-b0-c1

##render-tree
```xml
<poplayers>
  <pops>
    <layer depth=1>
      <pop-1 />
    </layer>
    <layer depth=2>
      <masker show={false}/>
      <dialog-1 />  //layer=2
    </layer>
    <layer depth=3>
      <pop-2 />     //layer=3
    </layer>
    <layer depth=4>
      <masker show={true}/>
      <dialog-1 />  //layer4
    </layer>
  </pops>

  <tips>
    <tip-1 />
    <tip-2 />
    <tip-3 />
  </tips>
</poplayers>

```
