(()=>{"use strict";var e,t={93:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components,o=JSON.parse('{"UU":"zaz-static/zagaz-static"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o}){const{title:i,titleColor:r,content:c,alignment:s,contentColor:m,contentSize:g,date:p,image:u,aspectRatio:d,flipHorizontal:v}=e;function z(e){let t=new Date(e),a=String(t.getDate()).padStart(2,"0"),l=String(t.getMonth()+1).padStart(2,"0"),n=t.getFullYear();t=l+"/"+a+"/"+n,o({date:e=t})}return(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n.PanelBody,{initialOpen:!0,title:(0,a.__)("Title Settings","zagaz-static")},(0,t.createElement)(n.ColorPicker,{onChange:function(e){o({titleColor:e})},value:r})),(0,t.createElement)(n.PanelBody,{initialOpen:!0,title:(0,a.__)("Content Settings","zagaz-static")},(0,t.createElement)(n.ColorPicker,{enableAlpha:!0,onChange:function(e){o({contentColor:e})},value:m}),(0,t.createElement)(n.FontSizePicker,{fallbackFontSize:16,fontSizes:[{name:"Small",size:12,slug:"small"},{name:"Normal",size:16,slug:"normal"},{name:"Big",size:26,slug:"big"}],onChange:function(e){void 0===e&&(e=16),e<12&&(e=12),e>26&&(e=26),o({contentSize:e})},size:"default",units:["px","em","rem"],value:g,withReset:!0,withSlider:!0})),(0,t.createElement)(n.PanelBody,{initialOpen:!1,title:(0,a.__)("Date Settings","zagaz-static")},(0,t.createElement)(n.DatePicker,{onChange:z,startOfWeek:1,value:p})),(0,t.createElement)(n.PanelBody,{initialOpen:!0,title:(0,a.__)("Image Settings","zagaz-static")},(0,t.createElement)(n.RadioControl,{label:(0,a.__)("Aspect Ratio","zagaz-static"),options:[{label:"Landscape 16:9",value:"landscape"},{label:"Square 1:1",value:"square"},{label:"Circle",value:"circle"},{label:"Portrait 9:16",value:"portrait"},{label:"Letterbox 4:3",value:"letterbox"},{label:"Original",value:"original"}],onChange:e=>{o({aspectRatio:e})},selected:d}),(0,t.createElement)(n.ToggleControl,{label:"Flip image horizontally",onChange:e=>{o({flipHorizontal:e=!0===e?"flip-horizontal":""})},checked:"flip-horizontal"===v||""}))),(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(l.AlignmentControl,{value:s,onChange:function(e){o({alignment:e})}})),(0,t.createElement)("div",{className:"zagaz-backend"},(0,t.createElement)(n.BaseControl,{label:"TITLE TEXT",__nextHasNoMarginBottom:!0},(0,t.createElement)(n.TextControl,{style:{color:r},className:"zagaz-title-input",onChange:e=>{o({title:e})},type:"text",value:i,__next40pxDefaultSize:!0})),(0,t.createElement)(n.BaseControl,{label:"SET DATE",__nextHasNoMarginBottom:!0},(0,t.createElement)("div",{className:"zagaz-date"},(0,t.createElement)("div",{className:"date-left"},(0,t.createElement)(n.DatePicker,{onChange:z,startOfWeek:1,value:p})),(0,t.createElement)("div",{className:"date-right"},""===p?(0,t.createElement)("h5",null,"Date: ",(new Date).toLocaleDateString()):(0,t.createElement)("h5",null,"Date: ",p)))),(0,t.createElement)(n.BaseControl,{label:"CONTENT TEXT",__nextHasNoMarginBottom:!0},(0,t.createElement)(l.RichText,{...(0,l.useBlockProps)({className:"zagaz-content",style:{color:m,textAlign:s,fontSize:g}}),className:"zagaz-richtext",tagName:"p",placeholder:(0,a.__)("Enter your text here...","zagaz-static"),value:c,onChange:function(e){o({content:e})}})),(0,t.createElement)("div",{className:"image-wrapper"},(0,t.createElement)("div",{className:"image-top"},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{onSelect:e=>{o({image:e.sizes.full.url})},allowedTypes:["image"],value:u,render:({open:e})=>(0,t.createElement)(n.Button,{className:"upload-button",variant:"primary",onClick:e},u?(0,a.__)("Change Image","zagaz-static"):(0,a.__)("Upload Image","zagaz-static"))}),u&&(0,t.createElement)(n.Button,{onClick:function(){o({image:null})},variant:"secondary",isDestructive:!0},(0,a.__)("Remove Image","zagaz-static")))),u&&(0,t.createElement)("div",{className:"image-down"},(0,t.createElement)("div",{className:`image-display ${v} }`},(0,t.createElement)("img",{src:u,alt:c,className:`image ${d}`}))))))},save:function({attributes:e}){const{title:a,titleColor:n,content:o,alignment:i,contentColor:r,contentSize:c,date:s,image:m,aspectRatio:g,flipHorizontal:p}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...l.useBlockProps.save()},(0,t.createElement)("div",{className:"zagaz-frontend"},(0,t.createElement)("div",{className:"wrapper"},(0,t.createElement)("div",{className:"image-wrapper"},(0,t.createElement)("img",{src:m,alt:a,className:`the-image ${g} ${p}`})),(0,t.createElement)("div",{className:"text-wrapper"},a&&(0,t.createElement)("h3",{style:{color:n}},a),o&&(0,t.createElement)(l.RichText.Content,{tagName:"p",value:o,style:{color:r,fontSize:c,textAlign:i}}),(0,t.createElement)("div",{className:"date"},s))))))}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,a,n,o)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,n,o]=e[m],r=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(l.O).every((e=>l.O[e](a[c])))?a.splice(c--,1):(r=!1,o<i&&(i=o));if(r){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,n,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,[i,r,c]=a,s=0;if(i.some((t=>0!==e[t]))){for(n in r)l.o(r,n)&&(l.m[n]=r[n]);if(c)var m=c(l)}for(t&&t(a);s<i.length;s++)o=i[s],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},a=globalThis.webpackChunkwp_my_blocks=globalThis.webpackChunkwp_my_blocks||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[350],(()=>l(93)));n=l.O(n)})();