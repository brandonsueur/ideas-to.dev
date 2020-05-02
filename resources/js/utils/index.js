
export const colorCategory = category => {
  switch (category) {
    case 'fullstack':
      return 'bg-green-100'
    case 'front-end':
      return 'bg-purple-100'
    case 'back-end':
      return 'bg-blue-100'
    case 'package':
      return 'bg-orange-100'
    case 'mobile':
      return 'bg-red-100'
    default:
      return 'bg-gray-100'
  }
}

export const emojiCategory = category => {
  switch (category) {
    case 'fullstack':
      return '😎'
    case 'front-end':
      return '🎨'
    case 'back-end':
      return '⚙️'
    case 'package':
      return '📦'
    case 'mobile':
      return '📱'
    default:
      return '🤷🏻‍♂️'
  }
}
