'use client'

interface GraphNode {
  id: string
  x: number
  y: number
  label?: string
}

interface GraphEdge {
  from: string
  to: string
  directed?: boolean
  weight?: string
}

interface GraphSVGProps {
  nodes: GraphNode[]
  edges: GraphEdge[]
  width?: number
  height?: number
  nodeRadius?: number
  title?: string
}

export default function GraphSVG({
  nodes,
  edges,
  width = 400,
  height = 300,
  nodeRadius = 20,
  title
}: GraphSVGProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      {title && <h4 className="text-sm font-semibold mb-3 text-center text-gray-700">{title}</h4>}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="mx-auto"
      >
        {/* Definições para setas */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#16a34a" />
          </marker>
        </defs>

        {/* Arestas */}
        <g>
          {edges.map((edge, index) => {
            const fromNode = nodes.find(n => n.id === edge.from)
            const toNode = nodes.find(n => n.id === edge.to)

            if (!fromNode || !toNode) return null

            const dx = toNode.x - fromNode.x
            const dy = toNode.y - fromNode.y
            const angle = Math.atan2(dy, dx)

            // Ajustar para começar/terminar na borda do círculo
            const x1 = fromNode.x + nodeRadius * Math.cos(angle)
            const y1 = fromNode.y + nodeRadius * Math.sin(angle)
            const x2 = toNode.x - nodeRadius * Math.cos(angle)
            const y2 = toNode.y - nodeRadius * Math.sin(angle)

            // Ponto médio para peso
            const midX = (x1 + x2) / 2
            const midY = (y1 + y2) / 2

            return (
              <g key={`edge-${index}`}>
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#16a34a"
                  strokeWidth="2"
                  markerEnd={edge.directed ? "url(#arrowhead)" : undefined}
                />
                {edge.weight && (
                  <text
                    x={midX}
                    y={midY - 8}
                    fill="#059669"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="select-none"
                  >
                    {edge.weight}
                  </text>
                )}
              </g>
            )
          })}
        </g>

        {/* Vértices */}
        <g>
          {nodes.map((node) => (
            <g key={`node-${node.id}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r={nodeRadius}
                fill="#10b981"
                stroke="#065f46"
                strokeWidth="2"
              />
              <text
                x={node.x}
                y={node.y}
                fill="white"
                fontSize="14"
                fontWeight="bold"
                textAnchor="middle"
                dominantBaseline="central"
                className="select-none"
              >
                {node.label || node.id}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}