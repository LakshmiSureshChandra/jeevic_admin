"use client"

import { useState } from "react"
import { Calendar, ChevronDown, X } from "lucide-react"
import { ICoupon, APISDK } from "@/libs/api"

// Define prop types for the modal component
interface NewCouponModalProps {
  onClose: () => void;
}

// Define types for discount options
type DiscountType = "percentage" | "amount";

export function NewCouponModal({ onClose }: NewCouponModalProps) {
  const [couponCode, setCouponCode] = useState<string>("")
  const [oneTimeUse, setOneTimeUse] = useState<boolean>(true)
  const [totalUses, setTotalUses] = useState<string>("")
  const [expiryDate, setExpiryDate] = useState<string>("")
  const [discountType, setDiscountType] = useState<DiscountType>("percentage")
  const [discountAmount, setDiscountAmount] = useState<string>("")
  const [minimumCartValue, setMinimumCartValue] = useState<string>("")

  const [terms, setTerms] = useState<string[]>([
    "20% off up to ₹999 on orders above ₹4000.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  ])

  const handleTermChange = (index: number, value: string) => {
    setTerms(prev => prev.map((term, i) => (i === index ? value : term)))
  }

  const handleAddTerm = () => {
    setTerms(prev => [...prev, ""])
  }

  const handleRemoveTerm = (index: number) => {
    setTerms(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Prepare coupon data
    const couponData: Omit<ICoupon, "id" | "created_at" | "updated_at"> = {
      code: couponCode,
      is_one_time: oneTimeUse,
      expires_on: new Date(expiryDate),
      no_of_uses: totalUses === "unlimited" ? Number.MAX_SAFE_INTEGER : Number(totalUses),
      meta_data: {
        discountType,
        discountAmount,
        minimumCartValue,
        terms: JSON.stringify(terms)
      }
    }

   await APISDK.getInstance().createCoupon(couponData)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overlow-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-800">Coupon Code</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="w-full border rounded-md px-3 py-2 text-gray-800"
                />
                <p className="text-xs text-gray-500 mt-1">Coupon ID will be generated automatically</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-800">One Time Use Per User</span>
                <div className="relative inline-flex items-center cursor-pointer">
                  <div
                    className={`w-10 h-5 rounded-full ${oneTimeUse ? "bg-orange-500" : "bg-gray-200"}`}
                    onClick={() => setOneTimeUse(!oneTimeUse)}
                  >
                    <div
                      className={`absolute w-3.5 h-3.5 bg-white rounded-full top-[3px] transition-transform ${
                        oneTimeUse ? "translate-x-[22px]" : "translate-x-[3px]"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Total No. Of Uses</label>
                  <div className="relative">
                    
                     <input
                  type="number"
                  value={totalUses}
                  onChange={(e) => setTotalUses(e.target.value)}
                  placeholder="total number uses"
                  className="w-full border rounded-md px-3 py-2 text-gray-800"
                />
                  
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Expiry</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 text-gray-800"
                    />
                    
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Discount Details</label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="discountType"
                      checked={discountType === "percentage"}
                      onChange={() => setDiscountType("percentage")}
                      className="mr-2 text-orange-500"
                    />
                    <span className="text-gray-800">Percentage%</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="discountType"
                      checked={discountType === "amount"}
                      onChange={() => setDiscountType("amount")}
                      className="mr-2 text-orange-500"
                    />
                    <span className="text-gray-800">Flat Discount(₹)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">{discountType==="amount"?"Flat Discount price":"Discount percentage"}</label>
                <input
                  type="text"
                  value={discountAmount}
                  onChange={(e) => setDiscountAmount(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Minimum Cart Value</label>
                <input
                  type="text"
                  value={minimumCartValue}
                  onChange={(e) => setMinimumCartValue(e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Terms & Conditions</label>
                <div className="bg-gray-50 p-3 rounded-md ">
                  <ol className="list-decimal pl-5 text-sm text-gray-800 space-y-2">
                    {terms.map((term, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={term}
                          onChange={e => handleTermChange(idx, e.target.value)}
                          className="flex-1 border rounded-md px-2 py-1 text-gray-800"
                        />
                        {terms.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveTerm(idx)}
                            className="text-red-500 hover:text-red-700 px-2"
                            aria-label="Remove term"
                          >
                            &times;
                          </button>
                        )}
                      </li>
                    ))}
                  </ol>
                  <button
                    type="button"
                    onClick={handleAddTerm}
                    className="mt-2 text-orange-500 hover:underline text-xs"
                  >
                    + Add Term
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full mt-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}