import React from 'react'

interface Props {
  name: string
  value: string
  label: string
  onChange(e: React.ChangeEvent<HTMLInputElement>): void
  disabled: boolean
}

const InputField: React.FC<Props> = ({
  name,
  disabled,
  label,
  onChange,
  value,
}) => {
  return (
    <div className="input-field">
      <label>
        <span>{label} </span>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </label>
      <button name={`confirm-${name}`} type="button">
        Ок
      </button>
    </div>
  )
}

export default InputField
