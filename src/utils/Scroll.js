export default function scrollToTarget(target) {
  const offset = 80
  const offsetPosition = target.offsetTop - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  })
}