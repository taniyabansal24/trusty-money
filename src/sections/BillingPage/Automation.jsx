import React from 'react'
import { Container } from '../../components/ui'
import CursorIcon from '../../components/svg/CursorIcon'
import LoadingSpinner from '../../components/svg/LoadingSpinner'
import MoreDotsIcon from '../../components/svg/MoreDotsIcon'
import LayersIcon from '../../components/svg/LayersIcon'
import CalendarArrowIcon from '../../components/svg/CalendarArrowIcon'
import CheckIcon from '../../components/svg/CheckIcon'
import WorkflowAnimation from './WorkflowAnimation'

const Automation = () => {
  return (
    <Container className="mx-auto flex items-start gap-x-10">
      <div className="grid w-full grid-cols-1 items-center gap-8 sm:gap-6 lg:grid-cols-12 lg:flex-row">
        <div className="row-[1] lg:col-[1/7]">
          <header>
            <div className="space-y-6 text-left">
              <div className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap px-[12px] py-[4px] text-sm font-medium [&>span]:inline-flex [&>span]:shrink-0 bg-shark-50 text-shark-500 rounded-full">
                <span>Effortless workflow automation</span>
              </div>
              <div className="flex flex-col space-y-3">
                <h2 className="text-[24px]/[32px] font-medium tracking-tight text-shark-950 sm:text-4xl/[48px]">
                  <span data-br="_r_8_" data-brr="0.25" style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>
                    Streamline the handover from sales to finance
                  </span>
                </h2>
                <p className="text-sm/6 sm:text-base/7">
                  <span data-br="_r_9_" data-brr="0.25" style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>
                    Stay on top of billing tasks, reduce errors and eliminate wasted hours from duplicate data entry
                  </span>
                </p>
                <div className="flex justify-start">
                  <div>
                    <a className="pointer z-11" href="https://access.sequencehq.com/">
                      <span className="relative z-20 flex items-center gap-2.5 text-sm text-indigo-500">
                        Speak to an expert
                        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
                          <path d="M1 0.75L5.5 5L1 9.25" stroke="#716FFF" strokeWidth="1.5" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="lg:col-[7/13]">
          <WorkflowAnimation/>
        </div>
      </div>
    </Container>
  )
}

export default Automation