/**
 * 回文字串
 */
let originalString: string = "bababbd";

let dealString = (str: string): string[] => {
    let restring: string[] = [];
    let isSame = false;
    for (let i: number = 0; i < str.length; i++) {
        let savestring: string = '';
        for (let j: number = i; j < str.length; j++) {
            if (j === i) {
                savestring = str.charAt(j);
            } else {
                if (savestring.length == 2) {
                    if (savestring.charAt(0) === savestring.charAt(1)) {
                        if (str.charAt(j) === savestring.charAt(1)) {
                            savestring = savestring + str.charAt(j);
                            isSame = true;
                            continue;
                        } else {
                            restring.push(savestring);
                            savestring = '';
                            break;
                        }
                    } else {
                        if (str.charAt(j) === savestring.charAt(0)) {
                            savestring = savestring + str.charAt(j);
                            continue;
                        } else {
                            savestring = '';
                            break;
                        }
                    }
                }
                if (savestring.length > 2) {
                    if (isSame === true) {
                        if (str.charAt(j) === savestring.charAt(savestring.length - 1)) {
                            savestring = savestring + str.charAt(j);
                        } else {
                            restring.push(savestring);
                            savestring = '';
                            break;
                        }
                    } else {
                        if ((j - i) % 2 == 1) {
                            if (j == str.length - 1) {
                                restring.push(savestring);
                                savestring = '';
                                break;
                            }
                            savestring = savestring + str.charAt(j);
                            continue;
                        } else {
                            if (str.charAt(j) === savestring.charAt(0)) {
                                savestring = savestring + str.charAt(j);
                                continue;
                            } else {
                                savestring = savestring.slice(0, -1);
                                restring.push(savestring);
                                savestring = '';
                                break;
                            }
                        }
                    }
                }
                savestring = savestring + str.charAt(j);
            }
            isSame = false;
        }
    }
    return restring;
}

console.log(dealString(originalString));