const WHATSAPP_NUMBER = '9062813000'

function App() {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')
  }

  return (
    <div className="page">
      <img
        src="/main.jpg"
        alt="Contact us on WhatsApp"
        className="clickable-image"
        onClick={handleClick}
      />
    </div>
  )
}

export default App
