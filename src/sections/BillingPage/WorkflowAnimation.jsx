import React, { useEffect, useState, useRef } from 'react'
import './animation.css'
import ArrowIcon from "../../components/svg/ArrowIcon";
import LoadingSpinner from '../../components/svg/LoadingSpinner'
import CheckIcon from '../../components/svg/CheckIcon'
import MoreDotsIcon from '../../components/svg/MoreDotsIcon'
import CalendarArrowIcon from '../../components/svg/CalendarArrowIcon'
import LayersIcon from '../../components/svg/LayersIcon'

const WorkflowAnimation = () => {
  // Animation states
  const [animationStage, setAnimationStage] = useState(0)
  const [invoiceOpacity, setInvoiceOpacity] = useState(1)
  const [invoiceTransform, setInvoiceTransform] = useState('translate(0px, 0px)')
  const [dashboardOpacity, setDashboardOpacity] = useState(0)
  const [dashboardTransform, setDashboardTransform] = useState('scale(0.95)')
  const [cursorOpacity, setCursorOpacity] = useState(0)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorScale, setCursorScale] = useState(1)
  const [activityOpacity, setActivityOpacity] = useState(0)
  const [activityTransform, setActivityTransform] = useState('translateY(20px)')
  const [activityHeight, setActivityHeight] = useState('32px')
  const [buttonState, setButtonState] = useState('idle') // 'idle', 'loading', 'success'
  const [activityItems, setActivityItems] = useState([
    { id: 1, opacity: 0, transform: 'translateY(10px)', scale: 1 },
    { id: 2, opacity: 0, transform: 'translateY(10px)', scale: 1 },
    { id: 3, opacity: 0, transform: 'translateY(10px)', scale: 1 }
  ])
  
  const animationRef = useRef(null)
  const activeTimeoutsRef = useRef([])
  
  // Track and cleanup timeouts
  const trackTimeout = (timeoutId) => {
    activeTimeoutsRef.current.push(timeoutId)
    return timeoutId
  }
  
  const clearAllTimeouts = () => {
    activeTimeoutsRef.current.forEach(timeoutId => {
      if (timeoutId) clearTimeout(timeoutId)
    })
    activeTimeoutsRef.current = []
    
    if (animationRef.current) {
      clearTimeout(animationRef.current)
      animationRef.current = null
    }
  }
  
  // Reset all states
  const resetAllStates = () => {
    setAnimationStage(0)
    setInvoiceOpacity(1)
    setInvoiceTransform('translate(0px, 0px)')
    setDashboardOpacity(0)
    setDashboardTransform('scale(0.95)')
    setCursorOpacity(0)
    setCursorPosition({ x: 0, y: 0 })
    setCursorScale(1)
    setActivityOpacity(0)
    setActivityTransform('translateY(20px)')
    setActivityHeight('32px')
    setButtonState('idle')
    setActivityItems([
      { id: 1, opacity: 0, transform: 'translateY(10px)', scale: 1 },
      { id: 2, opacity: 0, transform: 'translateY(10px)', scale: 1 },
      { id: 3, opacity: 0, transform: 'translateY(10px)', scale: 1 }
    ])
  }
  
  // Start animation sequence - SLOWER AND SMOOTHER
  const startAnimation = () => {
    clearAllTimeouts()
    
    // Scene 1: Invoice shows (0s)
    setAnimationStage(1)
    
    // Pause for 1 second
    const pause1 = setTimeout(() => {
      // Scene 2: Activity card appears with first notification (1s → 1.8s)
      setActivityOpacity(1)
      setActivityTransform('translateY(0px)')
      setAnimationStage(2)
      
      // Show first activity item after card appears
      const showFirstActivity = setTimeout(() => {
        const updatedItems = [...activityItems]
        updatedItems[0] = { ...updatedItems[0], opacity: 1, transform: 'translateY(0px)' }
        setActivityItems(updatedItems)
        setActivityHeight('64px')
        setAnimationStage(3)
        
        // Pause then show second notification (communication)
        const pauseForSecond = setTimeout(() => {
          updatedItems[1] = { ...updatedItems[1], opacity: 1, transform: 'translateY(0px)' }
          setActivityItems(updatedItems)
          setActivityHeight('96px')
          setAnimationStage(4)
          
          // Pause then transition to dashboard (3.5s → 4.2s)
          const transitionToDashboard = setTimeout(() => {
            // Fade out invoice
            setInvoiceOpacity(0)
            setInvoiceTransform('scale(0.95)')
            
            // Fade in dashboard
            setDashboardOpacity(1)
            setDashboardTransform('scale(1)')
            setAnimationStage(5)
            
            // Show cursor and move to start button (4.2s → 5.0s)
            const showCursor = setTimeout(() => {
              setCursorOpacity(1)
              setCursorPosition({ x: 0, y: 0 })
              setAnimationStage(6)
              
              // Move cursor to start button (5.0s → 5.8s)
              const moveToButton = setTimeout(() => {
                setCursorPosition({ x: 400, y: 50 }) // Adjust to your button position
                setCursorScale(0.9)
                setAnimationStage(7)
                
                // Pause then click (5.8s → 6.3s)
                const pauseBeforeClick = setTimeout(() => {
                  // Click animation
                  setCursorScale(0.7)
                  setAnimationStage(8)
                  
                  // Show loading spinner (6.3s → 6.5s)
                  const showLoading = setTimeout(() => {
                    setButtonState('loading')
                    setCursorScale(0.9)
                    setAnimationStage(9)
                    
                    // Loading animation (6.5s → 7.5s)
                    const loadingDuration = setTimeout(() => {
                      setButtonState('success')
                      setAnimationStage(10)
                      
                      // Add third activity notification (7.5s → 8.0s)
                      const addThirdActivity = setTimeout(() => {
                        const finalItems = [...updatedItems]
                        finalItems[2] = { ...finalItems[2], opacity: 1, transform: 'translateY(0px)' }
                        setActivityItems(finalItems)
                        setActivityHeight('128px')
                        setAnimationStage(11)
                        
                        // Pause then fade out cursor (8.0s → 8.5s)
                        const fadeOutCursor = setTimeout(() => {
                          setCursorOpacity(0)
                          setAnimationStage(12)
                          
                          // Fade out activity box (8.5s → 9.0s)
                          const fadeOutActivity = setTimeout(() => {
                            setActivityOpacity(0)
                            setActivityTransform('translateY(20px)')
                            setAnimationStage(13)
                            
                            // Fade out dashboard (9.0s → 9.5s)
                            const fadeOutDashboard = setTimeout(() => {
                              setDashboardOpacity(0)
                              setDashboardTransform('scale(0.95)')
                              setAnimationStage(14)
                              
                              // Show invoice again (9.5s → 10.0s)
                              const showInvoiceAgain = setTimeout(() => {
                                setInvoiceOpacity(1)
                                setInvoiceTransform('translate(0px, 0px)')
                                setAnimationStage(15)
                                
                                // Reset for loop (10.0s → 12.0s)
                                const resetDelay = setTimeout(() => {
                                  resetAllStates()
                                  
                                  // Restart animation after pause
                                  const restart = setTimeout(() => {
                                    startAnimation()
                                  }, 2000) // 2 second pause before restart
                                  trackTimeout(restart)
                                }, 1000)
                                trackTimeout(resetDelay)
                              }, 500)
                              trackTimeout(showInvoiceAgain)
                            }, 500)
                            trackTimeout(fadeOutDashboard)
                          }, 500)
                          trackTimeout(fadeOutActivity)
                        }, 500)
                        trackTimeout(fadeOutCursor)
                      }, 500)
                      trackTimeout(addThirdActivity)
                    }, 1000) // 1 second loading
                    trackTimeout(loadingDuration)
                  }, 200)
                  trackTimeout(showLoading)
                }, 500)
                trackTimeout(pauseBeforeClick)
              }, 800) // 800ms cursor movement
              trackTimeout(moveToButton)
            }, 800) // 800ms delay before cursor appears
            trackTimeout(showCursor)
          }, 1300) // 1300ms pause before transition
          trackTimeout(transitionToDashboard)
        }, 1500) // 1500ms pause before second activity
        trackTimeout(pauseForSecond)
      }, 800) // 800ms after activity card appears
      trackTimeout(showFirstActivity)
    }, 1000) // Initial 1 second pause
    trackTimeout(pause1)
    
    // Store main animation ref
    animationRef.current = pause1
  }
  
  // Initialize animation
  useEffect(() => {
    // Start animation on mount
    const startDelay = setTimeout(() => {
      startAnimation()
    }, 500) // Small delay on mount
    
    // Cleanup
    return () => {
      clearAllTimeouts()
      clearTimeout(startDelay)
    }
  }, [])
  
  return (
    <div className="">
      <div className="relative w-full">
        <div className="relative mx-auto flex w-full items-center justify-center">
          {/* Cursor */}
          <div
            id="hero-animation-cursor"
            className="absolute z-20 transition-all duration-500 ease-out"
            style={{
              transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) scale(${cursorScale})`,
              opacity: cursorOpacity,
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <ArrowIcon width={30} height={30} />
          </div>
          
          {/* Invoice */}
          <div 
            id="workflow-invoice" 
            className="mx-auto w-full max-w-[360px] overflow-hidden rounded transition-all duration-500 ease-out"
            style={{ 
              boxShadow: 'rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px',
              opacity: invoiceOpacity,
              transform: invoiceTransform,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            {/* Invoice content */}
            <div className="bg-[#FBFBFB] px-6 py-8">
              <img alt="Amara logo" loading="lazy" width="173" height="46" decoding="async" className="ml-auto w-[76px] shrink-0 grow-0 object-contain" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famara.c54bbb7d.png&w=384&q=100" />
              <div className="mt-[14px] flex justify-between">
                <div className="h-2 rounded-full bg-[#D4D4D4] invoice-row basis-[25%]" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}></div>
                <div className="invoice-row flex basis-[24%] flex-col gap-y-1.5" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                  <div className="h-2 rounded-full bg-[#D4D4D4]"></div>
                  <div className="h-2 rounded-full bg-[#F1F1F1] w-[50%]"></div>
                  <div className="h-2 rounded-full bg-[#F1F1F1] w-[60%]"></div>
                  <div className="h-2 rounded-full bg-[#F1F1F1] w-[90%]"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="pb-1 text-xs font-bold">Amara quote</p>
              <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#D4D4D4] basis-[30%]"></div>
                </div>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#D4D4D4] basis-[30%]"></div>
                </div>
              </div>
              <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                </div>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                </div>
              </div>
              <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                </div>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                </div>
              </div>
              <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                </div>
                <div className="flex basis-1/2">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[30%]"></div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                </div>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                </div>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                </div>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#D4D4D4] basis-[40%]"></div>
                </div>
              </div>
              <div className="invoice-row flex justify-between border-b border-[#F0F0F0] py-3 last:border-b-0" style={{ opacity: 1, transform: 'translate(0px, 0px)' }}>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                </div>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                </div>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                </div>
                <div className="flex basis-1/4">
                  <div className="h-2 rounded-full bg-[#F1F1F1] basis-[40%]"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dashboard */}
          <div 
            id="workflow-dashboard" 
            className="absolute w-full max-w-[512px] transition-all duration-500 ease-out"
            style={{ 
              opacity: dashboardOpacity,
              transform: dashboardTransform,
              transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <div className="relative w-full overflow-hidden rounded-lg border border-[#e4e8ef] border-opacity-10 bg-white py-5 pl-6 pr-4" style={{ boxShadow: 'rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px' }}>
              <div className="flex w-full justify-between gap-x-3">
                <img alt="Amara logo" loading="lazy" width="173" height="46" decoding="async" className="w-[100px] shrink-0 grow-0 object-contain" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Famara.c54bbb7d.png&w=384&q=100" />
                <div className="flex items-center gap-x-2 text-sm font-bold">
                  <div className="product-ui_button__BGCfH">Save</div>
                  <div id="workflow-start-billing" className="product-ui_button__BGCfH product-ui_variant-primary__BpmKm relative overflow-hidden" style={{ minWidth: '120px', height: '36px' }}>
                    {/* Loading state */}
                    {buttonState === 'loading' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LoadingSpinner />
                      </div>
                    )}
                    
                    {/* Success state */}
                    {buttonState === 'success' && (
                      <span 
                        data-state="success" 
                        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
                        style={{ 
                          opacity: 1,
                          transform: 'scale(1)',
                          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        Started
                      </span>
                    )}
                    
                    {/* Idle state */}
                    {buttonState === 'idle' && (
                      <span 
                        data-state="idle" 
                        className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
                        style={{ 
                          opacity: 1,
                          transform: 'scale(1)',
                          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                        }}
                      >
                        Start billing
                      </span>
                    )}
                  </div>
                  <div className="flex items-center p-2">
                    <MoreDotsIcon color="#073F9E" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div id="hero-animation-bottom" className="mt-3 flex w-full flex-col items-start justify-start gap-4 overflow-hidden rounded-lg bg-white py-5" style={{ boxShadow: 'rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px' }}>
                <div className="relative flex items-center justify-start self-stretch px-6">
                  <p className="text-left text-base font-bold text-[#14171c]">Pricing</p>
                </div>
                <div className="flex w-full items-start justify-between px-4">
                  <div className="flex flex-col items-start justify-start text-[#14171c]">
                    <div className="relative flex h-9 items-center gap-2 px-2">
                      <p className="text-left text-xs font-bold uppercase text-[#7483a0]">product</p>
                    </div>
                    <div className="relative overflow-hidden px-2">
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm">Platform Access</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden px-2">
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm">Onboarding fees</p>
                      </div>
                    </div>
                    <div className="relative overflow-hidden px-2">
                      <div className="flex h-9 max-w-full items-center justify-start gap-2">
                        <p className="min-w-0 flex-shrink overflow-hidden text-ellipsis whitespace-nowrap text-right text-sm">Account verification</p>
                        <LayersIcon size={24} color="#073F9E" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative flex h-9 items-center justify-start gap-2 self-stretch px-2">
                      <p className="text-left text-xs font-bold uppercase text-[#7483a0]">Frequency</p>
                    </div>
                    <div className="relative self-stretch overflow-hidden px-2">
                      <div className="flex h-9 items-center justify-start gap-2">
                        <p className="text-left text-sm text-[#344054]">Annually</p>
                        <CalendarArrowIcon size={24} color="#073F9E" />
                      </div>
                    </div>
                    <div className="relative self-stretch overflow-hidden px-2">
                      <div className="flex h-9 items-center justify-start gap-2">
                        <p className="text-left text-sm text-[#344054]">One time</p>
                      </div>
                    </div>
                    <div className="relative self-stretch overflow-hidden px-2">
                      <div className="flex h-9 items-center justify-start gap-2">
                        <p className="text-left text-sm text-[#344054]">Monthly</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative flex h-9 items-center justify-end gap-2 self-stretch px-2">
                        <p className="text-left text-xs font-bold uppercase text-[#7483a0]">price</p>
                      </div>
                      <div className="relative w-full overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-end gap-2">
                          <p className="flex-grow text-right text-sm text-[#14171c]">£5,000.00</p>
                        </div>
                      </div>
                      <div className="relative w-full overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-end gap-2">
                          <p className="flex-grow text-right text-sm text-[#14171c]">£5,900.00</p>
                        </div>
                      </div>
                      <div className="relative w-full overflow-hidden px-2">
                        <div className="flex h-9 items-center justify-end gap-2">
                          <p className="flex-grow text-right text-sm text-[#14171c]">From £0.20</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex h-9 w-9 items-center justify-center px-2"></div>
                      <div className="overflow-hidden">
                        <div className="flex h-9 w-9 items-center justify-center">
                          <MoreDotsIcon className="h-6 w-6 text-gray-400" />
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex h-9 w-9 items-center justify-center">
                          <MoreDotsIcon />
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex h-9 w-9 items-center justify-center">
                          <MoreDotsIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Activity Card */}
          <div className="absolute h-full w-full max-w-[calc(512px+40px*2)]">
            <div 
              id="workflow-activity" 
              className="absolute left-0 top-[68%] rounded-lg bg-white p-4 transition-all duration-500 ease-out" 
              style={{ 
                boxShadow: 'rgba(17, 26, 37, 0.05) 0px 0px 0px 1px, rgba(16, 25, 36, 0.1) 0px 2px 5px 0px, rgba(16, 25, 36, 0.1) 0px 5px 20px 0px',
                transform: activityTransform,
                opacity: activityOpacity,
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <p className="text-xs font-bold">Activity</p>
              <div 
                id="workflow-activity-list" 
                className="mt-3 min-w-[262px] overflow-hidden transition-all duration-500 ease-out"
                style={{ 
                  height: activityHeight,
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                {/* Activity Item 1 */}
                <div 
                  className="workflow-activity-item transition-all duration-500 ease-out mb-3"
                  style={{ 
                    transform: activityItems[0].transform,
                    opacity: activityItems[0].opacity,
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >
                  <div className="flex items-start text-xs">
                    <div>
                      <img alt="Facu Montanaro avatar image" loading="lazy" width="16" height="16" decoding="async" className="mr-2 h-4 w-4 shrink-0 grow-0 rounded-full" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffacu-montanaro.f071670e.png&w=32&q=75" />
                      <div className="line my-1 flex w-4 justify-center" style={{ transform: 'scale(0.9, 0.9)', opacity: 0 }}>
                        <div className="h-6 w-0.5 rounded-full bg-[#D1D9E4]"></div>
                      </div>
                    </div>
                    <div className="text-[#1D2939]">
                      <p className="">Facu <span className="text-[#596575]">(Sales)</span></p>
                      <p className="">Can we start billing Amara?</p>
                    </div>
                  </div>
                </div>
                
                {/* Activity Item 2 */}
                <div 
                  className="workflow-activity-item transition-all duration-500 ease-out mb-3"
                  style={{ 
                    transform: activityItems[1].transform,
                    opacity: activityItems[1].opacity,
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >
                  <div className="flex items-start text-xs">
                    <div>
                      <img alt="Riya Grover avatar image" loading="lazy" width="16" height="16" decoding="async" className="mr-2 h-4 w-4 shrink-0 grow-0 rounded-full" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjane-smith.d430e8be.png&w=32&q=75" />
                      <div className="line my-1 flex w-4 justify-center" style={{ transform: 'scale(0.9, 0.9)', opacity: 0 }}>
                        <div className="h-6 w-0.5 rounded-full bg-[#D1D9E4]"></div>
                      </div>
                    </div>
                    <div className="text-[#1D2939]">
                      <p className="">Jane Smith <span className="text-[#596575]">(Finance)</span></p>
                      <p className="">On it</p>
                    </div>
                  </div>
                </div>
                
                {/* Activity Item 3 */}
                <div 
                  className="workflow-activity-item transition-all duration-500 ease-out"
                  style={{ 
                    transform: activityItems[2].transform,
                    opacity: activityItems[2].opacity,
                    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                >
                  <div>
                    <div className="flex items-center text-xs">
                      <div className="mr-2 grow-0 rounded-full">
                        <CheckIcon size={20} />
                      </div>
                      <div>
                        <p>Billing schedule started</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkflowAnimation