import { ImageResponse } from "next/og"

export const alt = "Adrian Dahl — Software Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", padding: 80, background: "#111111", color: "white" }}>
      <div style={{ fontSize: 28, color: "#a3a3a3" }}>Software Developer</div>
      <div style={{ fontSize: 88, marginTop: 24 }}>Adrian Dahl</div>
      <div style={{ fontSize: 36, marginTop: 24 }}>Design. Build. Deploy.</div>
      <div style={{ fontSize: 24, marginTop: 64, color: "#a3a3a3" }}>adriandahl.com</div>
    </div>,
    size,
  )
}
