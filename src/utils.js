export default function generateId(max=999999999) {
    return Math.floor(Math.random() * Math.floor(max))
}