import React from 'react'
import CostbyYear from './CostbyYear.tsx'
import CostbyState from './CostbyState.tsx'
import { LossbyType } from './Lossbytype.tsx'

export const Datavisuals = () => {
    return (
        <div>
            <CostbyYear />
            <CostbyState />
            <LossbyType />
        </div>

    )
}
