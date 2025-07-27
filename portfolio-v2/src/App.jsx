import ProfileCard from "./components/imported/profile-card/ProfileCard.jsx";
import DotGrid from "./components/imported/dot-grid/DotGrid.jsx";

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', zIndex: 0 }}>
      <DotGrid
        dotSize={5}
        gap={35}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <div style={{width: "25rem", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>

        <ProfileCard/>
      </div>
    </div>
  )
}

export default App
