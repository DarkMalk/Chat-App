const imgs = {
  githubIcon: {
    img: 'github-icon.svg',
    desc: 'Github Icon'
  },
  searchIcon: {
    img: 'search-icon.svg',
    desc: 'Search Icon'
  },
  selectIcon: {
    img: '/select-icon.svg',
    desc: 'Pointer Select Icon'
  },
  chatBtnIcon: {
    img: '/chat-btn-icon.svg',
    desc: 'Chat Button Icon'
  },
  chatLogoIcon: {
    img: '/chat-icon.svg',
    desc: 'Chat Logo Icon'
  },
  closeIcon: {
    img: '/close-icon.svg',
    desc: 'Close Icon'
  },
  sendMessageIcon: {
    img: '/send-icon.svg',
    desc: 'Send Message Icon'
  },
  signInIcon: {
    img: '/sign-in-icon.svg',
    desc: 'Sign In Icon'
  },
  socialConnected: {
    img: '/social-connected-like.svg',
    desc: 'Social Connected Image'
  },
  logoutIcon: {
    img: '/logout-icon.svg',
    desc: 'Logout Icon'
  }
}

export const Image = ({ img }) => {
  return <img src={imgs[img]?.img} alt={imgs[img]?.desc} />
}
