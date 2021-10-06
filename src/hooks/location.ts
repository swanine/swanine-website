export function locationPage(pageName: string): void {
  window.location.href = pageName
}

export function blankPage(pageName: string): void {
  window.open(pageName, '_blank')
}
