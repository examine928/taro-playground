"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4245],{"4245":function(A){A.exports=JSON.parse('{"version":3,"sources":["src/components/radio/radio.tsx","src/components/radio/radio-group.tsx"],"names":["Radio","this","handleClick","e","stopPropagation","_this","disabled","checked","prototype","watchChecked","newVal","isWillLoadCalled","onChange","emit","value","watchId","inputEl","setAttribute","componentDidRender","id","el","removeAttribute","componentWillLoad","render","_a","name","nativeProps","h","Host","className","onClick","Object","assign","ref","dom","type","class","RadioGroup","uniqueName","Date","now","toString","function","target","tagName","childList","querySelectorAll","forEach","element","detail","componentDidLoad","defineProperty","get","childList_1","getValues","configurable","val","Array","from","checkbox","querySelector"],"mappings":"wGAKaA,MAAK,6GAsChBC,KAAAC,YAAc,SAACC,GACbA,EAAEC,kBACF,GAAIC,EAAKC,SAAU,OACnB,IAAKD,EAAKE,QAASF,EAAKE,QAAU,qCAtCpB,kCAEkC,oBACtB,uBACN,yBAEM,MAK5BP,EAAAQ,UAAAC,aAAA,SAAcC,GACZ,IAAKT,KAAKU,iBAAkB,OAC5BD,GAAUT,KAAKW,SAASC,KAAK,CAAEC,MAAOb,KAAKa,SAI7Cd,EAAAQ,UAAAO,QAAA,SAASL,GACP,IAAKT,KAAKU,iBAAkB,OAC5B,GAAID,EAAQT,KAAKe,QAAQC,aAAa,KAAMP,IAQ9CV,EAAAQ,UAAAU,mBAAA,WACEjB,KAAKkB,IAAMlB,KAAKmB,GAAGC,gBAAgB,OAGrCrB,EAAAQ,UAAAc,kBAAA,WACErB,KAAKU,iBAAmB,MAS1BX,EAAAQ,UAAAe,OAAA,WAAA,IAAAlB,EAAAJ,KACQ,IAAAuB,EAAkDvB,KAAhDM,EAAOiB,EAAAjB,QAAEkB,EAAID,EAAAC,KAAEX,EAAKU,EAAAV,MAAER,EAAQkB,EAAAlB,SAAEoB,EAAWF,EAAAE,YAEnD,OACEC,EAACC,KAAI,CACHC,UAAU,sBACVC,QAAS7B,KAAKC,aAEdyB,EAAA,QAAAI,OAAAC,OAAA,CACEC,IAAK,SAAAC,GACH,IAAKA,EAAK,OACV7B,EAAKW,QAAUkB,EACf,GAAI7B,EAAKc,GAAIe,EAAIjB,aAAa,KAAMZ,EAAKc,KAE3CgB,KAAK,QACLV,KAAMA,EACNX,MAAOA,EACPsB,MAAM,aACN7B,QAASA,EACTD,SAAUA,EACVM,SAAU,SAAAT,GAAK,OAAAA,EAAEC,oBACbsB,IAENC,EAAA,IAAA,CAAGS,MAAM,sBACTT,EAAA,OAAA,+QApEU,OCALU,WAAU,6FACbpC,KAAAqC,WAAaC,KAAKC,MAAMC,SAAS,wBAazCJ,EAAA7B,UAAAkC,SAAA,SAAUvC,GACRA,EAAEC,kBACF,GAAKD,EAAEwC,OAAmBC,UAAY,kBAAmB,OAEzD,IAAMD,EAASxC,EAAEwC,OACjB,GAAIA,EAAOpC,QAAS,CAClB,IAAMsC,EAAY5C,KAAKmB,GAAG0B,iBAAiB,mBAE3CD,EAAUE,SAAQ,SAAAC,GAChB,GAAIA,IAAYL,EAAQ,CACtBK,EAAQzC,QAAU,UAItBN,KAAKa,MAAQX,EAAE8C,OAAOnC,MAEtBb,KAAKW,SAASC,KAAK,CACjBC,MAAOb,KAAKa,UAKlBuB,EAAA7B,UAAA0C,iBAAA,WAAA,IAAA7C,EAAAJ,KACE,IAAM4C,EAAY5C,KAAKmB,GAAG0B,iBAAiB,mBAE3CD,EAAUE,SAAQ,SAACC,GACjBA,EAAQ/B,aAAa,OAAQZ,EAAKoB,MAAQpB,EAAKiC,eAGjDP,OAAOoB,eAAelD,KAAKmB,GAAI,QAAS,CACtCgC,IAAK,WACH,IAAK/C,EAAKS,MAAO,CACf,IAAMuC,EAAYhD,EAAKe,GAAG0B,iBAAiB,mBAC3CzC,EAAKS,MAAQT,EAAKiD,UAAUD,GAE9B,OAAOhD,EAAKS,OAEdyC,aAAc,QAIlBlB,EAAA7B,UAAA8C,UAAA,SAAWT,GACT,IAAIW,EAAM,GACVC,MAAMC,KAAKb,GACRE,SAAQ,SAAAC,GACP,IAAMW,EAAoCX,EAAQY,cAAc,SAChE,GAAID,IAAQ,MAARA,SAAQ,OAAA,EAARA,EAAUpD,QAAS,CACrBiD,EAAMG,EAAS7C,OAAS,OAG9B,OAAO0C,GAGTnB,EAAA7B,UAAAe,OAAA,WACE,OACEI,EAACC,KAAI,CAACQ,MAAM,yJArEK","sourcesContent":["import { Component, h, ComponentInterface, Prop, Event, EventEmitter, Host, Watch, Element, State } from \'@stencil/core\'\\n\\n@Component({\\n  tag: \'taro-radio-core\'\\n})\\nexport class Radio implements ComponentInterface {\\n  private inputEl: HTMLInputElement\\n  @Prop() name: string\\n  @Prop() value = \'\'\\n  @Prop({ mutable: true }) id: string\\n  @Prop({ mutable: true, reflect: true }) checked = false\\n  @Prop() disabled: boolean = false\\n  @Prop() nativeProps = {}\\n\\n  @State() isWillLoadCalled = false\\n\\n  @Element() el: HTMLElement\\n\\n  @Watch(\'checked\')\\n  watchChecked (newVal) {\\n    if (!this.isWillLoadCalled) return\\n    newVal && this.onChange.emit({ value: this.value })\\n  }\\n\\n  @Watch(\'id\')\\n  watchId (newVal) {\\n    if (!this.isWillLoadCalled) return\\n    if (newVal) this.inputEl.setAttribute(\'id\', newVal)\\n  }\\n\\n  @Event({\\n    eventName: \'radiochange\'\\n  })\\n  onChange: EventEmitter\\n\\n  componentDidRender () {\\n    this.id && this.el.removeAttribute(\'id\')\\n  }\\n\\n  componentWillLoad () {\\n    this.isWillLoadCalled = true\\n  }\\n\\n  handleClick = (e: Event) => {\\n    e.stopPropagation()\\n    if (this.disabled) return\\n    if (!this.checked) this.checked = true\\n  }\\n\\n  render () {\\n    const { checked, name, value, disabled, nativeProps } = this\\n\\n    return (\\n      <Host\\n        className=\'weui-cells_checkbox\'\\n        onClick={this.handleClick}\\n      >\\n        <input\\n          ref={dom => {\\n            if (!dom) return\\n            this.inputEl = dom\\n            if (this.id) dom.setAttribute(\'id\', this.id)\\n          }}\\n          type=\'radio\'\\n          name={name}\\n          value={value}\\n          class=\'weui-check\'\\n          checked={checked}\\n          disabled={disabled}\\n          onChange={e => e.stopPropagation()}\\n          {...nativeProps}\\n        />\\n        <i class=\'weui-icon-checked\' />\\n        <slot />\\n      </Host>\\n    )\\n  }\\n}\\n","import { Component, h, ComponentInterface, Host, Prop, Event, EventEmitter, Listen, Element } from \'@stencil/core\'\\n\\n@Component({\\n  tag: \'taro-radio-group-core\'\\n})\\nexport class RadioGroup implements ComponentInterface {\\n  private uniqueName = Date.now().toString(36)\\n  private value: string\\n\\n  @Prop() name\\n\\n  @Element() el: HTMLElement\\n\\n  @Event({\\n    eventName: \'change\'\\n  })\\n  onChange: EventEmitter\\n\\n  @Listen(\'radiochange\')\\n  function (e: CustomEvent<{ value: string }>) {\\n    e.stopPropagation()\\n    if ((e.target as Element).tagName !== \'TARO-RADIO-CORE\') return\\n\\n    const target = e.target as HTMLTaroRadioCoreElement\\n    if (target.checked) {\\n      const childList = this.el.querySelectorAll(\'taro-radio-core\')\\n\\n      childList.forEach(element => {\\n        if (element !== target) {\\n          element.checked = false\\n        }\\n      })\\n\\n      this.value = e.detail.value\\n\\n      this.onChange.emit({\\n        value: this.value\\n      })\\n    }\\n  }\\n\\n  componentDidLoad () {\\n    const childList = this.el.querySelectorAll(\'taro-radio-core\')\\n\\n    childList.forEach((element) => {\\n      element.setAttribute(\'name\', this.name || this.uniqueName)\\n    })\\n\\n    Object.defineProperty(this.el, \'value\', {\\n      get: () => {\\n        if (!this.value) {\\n          const childList = this.el.querySelectorAll(\'taro-radio-core\')\\n          this.value = this.getValues(childList)\\n        }\\n        return this.value\\n      },\\n      configurable: true\\n    })\\n  }\\n\\n  getValues (childList: NodeListOf<HTMLTaroRadioCoreElement>) {\\n    let val = \'\'\\n    Array.from(childList)\\n      .forEach(element => {\\n        const checkbox: HTMLInputElement | null = element.querySelector(\'input\')\\n        if (checkbox?.checked) {\\n          val = checkbox.value || \'\'\\n        }\\n      })\\n    return val\\n  }\\n\\n  render () {\\n    return (\\n      <Host class=\'weui-cells_radiogroup\' />\\n    )\\n  }\\n}\\n"]}')}}]);