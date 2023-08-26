

import { Fragment, ReactNode } from "react"
import { MotionBox } from "../animations/motionChakra"
import Seo from "../shared/seo/seo"
import { SettingsPayload } from "../../../types"




interface PageLayoutProps {
  children: ReactNode
  settings?: SettingsPayload
  title?: string;
  description?: string;
  keywords?: string;
}

export default function PageLayout({
  children,
  title,
  settings,
  description,
}: PageLayoutProps) {

  const variants = {
    hidden: {
      opacity: 0,
      x: 10,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: 0,
      y: 10,
    }
  }
  return (
    <Fragment>
      <Seo title={title} description={description} image={settings?.image} />
      <MotionBox
        variants={variants}
        initial={'hidden'}
        animate="visible"
        exit="exit"
        w="full"
        mx="auto"
      >
        {children}
      </MotionBox>
    </Fragment>
  )
}
