interface MyChipProps {
    icon?: React.ReactNode
    text: string,
    borderRadius?: number,
    bgColor?: string,
    textColor?: string,
    borderColor?: string,
    fontSize?: number,
    width?: number | string,
    height?: number | string
}


export function MyChip({ icon, text, borderRadius = 12, bgColor = "transparent", textColor = "black", borderColor = "black", fontSize = 10, width = 'auto', height = 'auto' }: MyChipProps) {
    return (
        <div style={{
            borderRadius: `${borderRadius}px`,
            backgroundColor: bgColor,
            border: `1.5px solid ${borderColor}`,
            width: width,
            height: height,
            padding: 4
        }} className="d-flex align-items-center justify-items-center">
            {
                icon &&
                <div className="d-inline">
                    {icon}
                </div>
            }
            <div style={{ color: textColor, fontSize: fontSize, width: "100%", }} className="text-truncate">
                {text}
            </div>
        </div>
    )
}