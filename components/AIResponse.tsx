import React from 'react'
interface IAIResponse {
    output: string;
  }

const AIResponse = (props: IAIResponse) => {
  return (
    <div>
        <div style={{ marginTop: '24px' }}>
          <h2>Your Repurposed Content:</h2>
          <div
            style={{
              marginTop: '8px',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {props.output}
          </div>
        </div>
    </div>
  )
}