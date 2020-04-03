
export const colorCategory = (category) => {
  switch (category) {
    case 'fullstack':
      return 'bg-green-100'
      break
    case 'front-end':
      return 'bg-purple-100'
      break
    case 'back-end':
      return 'bg-blue-100'
      break
    case 'package':
      return 'bg-orange-100'
      break
    case 'mobile':
      return 'bg-red-100'
      break
    default:
      return 'bg-gray-100'
      break
  }
}

export const emojiCategory = (category) => {
  switch (category) {
    case 'fullstack':
      return '😎'
      break
    case 'front-end':
      return '🎨'
      break
    case 'back-end':
      return '⚙️'
      break
    case 'package':
      return '📦'
      break
    case 'mobile':
      return '📱'
      break
    default:
      return '🤷🏻‍♂️'
      break
  }
}
