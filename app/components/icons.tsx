/// <reference path="../../typings/tsd.d.ts" />

import React = require('react');

enum IconTypes { pencil, star, check, plus, minus, ok, remove, edit, zoom_in, zoom_out, heart, circle, smile, leaf }

const unicodeIcons = {
    circle : "\u25CF",
    smile: "\u263B"
};

function iconClassName(icon:string|number) {
    if (typeof icon === "number") {
        icon = IconTypes[icon];
    }
    return icon + '';
}

function icon(icon:string|number) {
    if (typeof icon === "number") {
        icon = IconTypes[icon];
    }
    const iconName = ((typeof icon === "number") ? IconTypes[icon] : icon) as string;
    const unicode = unicodeIcons[iconName];
    if (unicode) {
        return (<span>{unicode}</span>);
    }

    const iconClassName = iconName.replace(/_/g, '-');

    return (<span className={"glyphicon glyphicon-"+iconClassName} aria-hidden={true} />);
}

export { icon, IconTypes, iconClassName };
