(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{33:function(e,t,n){"use strict";n.r(t);var r=n(8),i=n.n(r),a=n(9),o=n.n(a),u=n(10),c=n.n(u),s=n(11),d=n.n(s),f=n(5),l=n.n(f),h=n(1),p=n.n(h),m=n(0),v=n.n(m),g=n(27),k=n.n(g),b=n(2);function w(){var e=p()(["\n  animation: "," 2s;\n  border: none;\n"]);return w=function(){return e},e}function y(){var e=p()(["\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n"]);return y=function(){return e},e}var M=Object(b.c)(y()),E=(b.b.div(w(),M),function(e){var t=e.link,n=e.id;return v.a.createElement("iframe",{src:t,height:"630",width:"1120",title:n})});E.propTypes={link:k.a.string,id:k.a.number},E.defaultProps={link:"https://www.youtube.com/embed/2LNOT2TYcmM",id:1};var x=E;function H(){var e=p()(["\n  animation: "," 2s;\n"]);return H=function(){return e},e}function L(){var e=p()(["\n  0% { opacity: 0; }\n  100% { opacity: 1; }\n"]);return L=function(){return e},e}var S=Object(b.c)(L()),O=b.b.iframe(H(),S),R=function(e){var t=e.link,n=e.id;return v.a.createElement(O,{src:t,key:n,alt:"dummy data",width:"1120",height:"630"})};R.propTypes={link:k.a.string,id:k.a.number},R.defaultProps={link:"https://fecpictures.s3.us-east-2.amazonaws.com/pics/100.jpg",id:1};var C=R;function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function T(){var e=p()(["\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  outline: none;\n  height: 48px;\n  width: 48px;\n  min-height: 0;\n  font-weight: 400;\n  font-size: 2rem;\n  margin: 0;\n  padding: 0;\n  margin: auto 0;\n"]);return T=function(){return e},e}function j(){var e=p()(["\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  outline: none;\n  height: 48px;\n  width: 48px;\n  min-height: 0;\n  font-weight: 400;\n  font-size: 2rem;\n  margin: auto 0;\n  padding: 0;\n"]);return j=function(){return e},e}function z(){var e=p()(["\n  display: flex;\n  width: 1220px;\n  margin: 0 auto;\n"]);return z=function(){return e},e}var F=b.b.div(z()),P=b.b.button(j()),J=(b.b.button(T()),function(e){c()(r,e);var t,n=(t=r,function(){var e,n=l()(t);if(D()){var r=l()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return d()(this,e)});function r(e){var t;return i()(this,r),(t=n.call(this,e)).state={leftHovered:!1,rightHovered:!1,featuredMedia:{link:"none"}},t}return o()(r,[{key:"componentDidMount",value:function(){this.setState({featuredMedia:this.props.featured})}},{key:"componentDidUpdate",value:function(e){e.featured!==this.props.featured&&this.setState({featuredMedia:this.props.featured})}},{key:"render",value:function(){var e=this,t=this.props,n=(t.featured,t.handleButtonClick),r=t.length;return"none"===this.state.featuredMedia.link?v.a.createElement(v.a.Fragment,null):v.a.createElement(F,null,r>1?v.a.createElement(P,{onMouseOver:function(t){return e.setState({leftHovered:!0})},onMouseLeave:function(t){return e.setState({leftHovered:!1})},onClick:function(e){return n(e,!0)}},v.a.createElement("svg",{height:"48",width:"48",viewbox:"0 0 48 48",id:this.state.featuredMedia.id},v.a.createElement("path",{stroke:this.state.leftHovered?"black":"grey",d:"M31 12 L17 24.5 L31 36",fill:"none","stroke-width":"2"}))):v.a.createElement(v.a.Fragment,null),this.state.featuredMedia.thumbnail?v.a.createElement(x,{link:this.state.featuredMedia.link,id:this.state.featuredMedia.id}):v.a.createElement(C,{link:this.state.featuredMedia.link,id:this.state.featuredMedia.id}),r>1?v.a.createElement(P,{onMouseOver:function(t){return e.setState({leftHovered:!0})},onMouseLeave:function(t){return e.setState({leftHovered:!1})},onClick:function(e){return n(e,!1)}},v.a.createElement("svg",{height:"48",width:"48",viewbox:"0 0 48 48",id:this.state.featuredMedia.id},v.a.createElement("path",{stroke:this.state.leftHovered?"black":"grey",d:"M17 12 L31 24.5 L17 36",fill:"none","stroke-width":"2"}))):v.a.createElement(v.a.Fragment,null))}}]),r}(v.a.Component));t.default=J}}]);