"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5361],{"5361":function(n){n.exports=JSON.parse('{"version":3,"sources":["src/components/tabs/tab-item.tsx"],"names":["TabItem","prototype","componentDidLoad","notSupport","this","render","h","Host"],"mappings":"8IAOaA,QAAO,kDAClBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,UAAWC,OAGxBJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,gBAPS","sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-tab-item-core\'\\n})\\nexport class TabItem implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'TabItem\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"]}')}}]);