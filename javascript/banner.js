window.addEventListener('DOMContentLoaded', () => {
    const images = [
        '../images/epoxy.jpg',
        '../images/flake.jpg',
        '../images/metallic.jpg',
        '../images/overlay.jpg',
        '../images/stain.jpg'
    ]

    let i = 0

    setInterval(() => {
        const banner = document.querySelector('.banner')
        i = (i + 1) % images.length
        banner.style.background = `url(${images[i]})`
        banner.style.backgroundSize = 'cover'
    }, 4000)
})