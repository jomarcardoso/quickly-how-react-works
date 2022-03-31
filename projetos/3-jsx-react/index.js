var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a = window, React = _a.React, ReactDOM = _a.ReactDOM;
function Input(props) {
    return React.createElement("input", __assign({}, props));
}
function App() {
    var _a = React.useState(''), value = _a[0], setValue = _a[1];
    function handleChange(event) {
        setValue(event.target.value);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Input, { type: "text", value: value, onChange: handleChange }),
        React.createElement("p", null, value)));
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
