import '../styles/GIF.css'

export default function GIF() {
    const gifUrl = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDc0NDBwNDgzbDdjc2xxM2t0MmI2bzZ4bGs0YzZnc2tnN3RnaTFodyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12nfFCZA0vyrSw/giphy.gif'
    return (
        <img className='gif' src={gifUrl} alt="Harry Potter GIF" />
    )

}