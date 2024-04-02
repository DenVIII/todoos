export default function generateId() {
    const firstPart = Math.floor(Math.random() * Date.now()).toString().substring(0,5)
    const secondPart = Math.floor(Math.random() * Date.now()).toString().substring(0,5)
    return  `${firstPart}-${secondPart}`
}