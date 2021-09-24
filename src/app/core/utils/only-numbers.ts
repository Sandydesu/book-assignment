export function allowOnlyNumber(event: any) {
  if (event.type === 'paste') {
    const clipboardData: DataTransfer = event.clipboardData;
    const pastedText = clipboardData.getData('text');

    if (isNaN(Number(pastedText))) {
      event.preventDefault();
    }
  }

  const keyCode = event.keyCode;
  // Allow: backspace, delete, tab, escape, enter
  const includedKeys = [8, 9, 13, 27, 46, 110];

  if (includedKeys.includes(keyCode)) {
    return;
  }
  // Allow: home, end, left, right, down, up
  if (keyCode >= 35 && keyCode <= 40) {
    return;
  }

  const ctrlIncludedKeys = [65, 67, 86, 88];
  if (event.ctrlKey && ctrlIncludedKeys.includes(keyCode)) {
    return;
  }

  if (
    (event.shiftKey || keyCode < 48 || event.keyCode > 57) &&
    (keyCode < 96 || keyCode > 105)
  ) {
    event.preventDefault();
  }
}
