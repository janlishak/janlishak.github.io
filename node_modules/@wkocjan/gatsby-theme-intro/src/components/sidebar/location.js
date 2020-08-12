import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ProfileType } from "../../types"

const Location = ({ location, relocation }) => (
  <>
    <div className="inline-flex items-center bg-front mt-6 w-auto px-2">
      <span className="text-lead px-1">
        <FaMapMarkerAlt className="h-4 w-4" />
      </span>
      <span className="text-back font-header font-bold py-1 px-1 text-lg">
        {location}
      </span>
    </div>
    {relocation && (
      <div className="text-xs uppercase mt-2 font-semibold text-front font-header">
        Available for relocation
      </div>
    )}
  </>
)

Location.propTypes = {
  location: ProfileType.location,
  relocation: ProfileType.relocation,
}

export default Location
