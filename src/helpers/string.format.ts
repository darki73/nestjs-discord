const stringFormat = function(string: string, ...args: any[]): string {
    return string.replace(/{(\d+)}/g, (match, position: number) => {
        return typeof args[position] != 'undefined'
            ? args[position]
            : match;
    });
};

export {
    stringFormat
};
