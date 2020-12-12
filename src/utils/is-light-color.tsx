const isLightColor = (hex): boolean  => {
    let result: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    let hsp = Math.sqrt(0.299 * (result.r * result.r) + 0.587 * (result.g * result.g) + 0.114 * (result.b * result.b))
    return (hsp>127.5);
}

export default isLightColor;