import React, { useState } from "react";

const inputTypes = [
  { label: "Text", value: "text" },
  { label: "Number", value: "number" },
  { label: "Email", value: "email" },
  { label: "String", value: "string" },
];

interface Field {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

const WithdrawMethodCreate: React.FC = () => {
  const [methodName, setMethodName] = useState("");
  const [isDefault, setIsDefault] = useState(false);
  const [fields, setFields] = useState<Field[]>([]);

  // Current field input
  const [fieldType, setFieldType] = useState(inputTypes[0].value);
  const [fieldName, setFieldName] = useState("");
  const [fieldPlaceholder, setFieldPlaceholder] = useState("");
  const [fieldRequired, setFieldRequired] = useState(true);

  const handleAddField = () => {
    if (!fieldName.trim() || !fieldPlaceholder.trim()) return;
    setFields([
      ...fields,
      {
        type: fieldType,
        name: fieldName,
        placeholder: fieldPlaceholder,
        required: fieldRequired,
      },
    ]);
    setFieldType(inputTypes[0].value);
    setFieldName("");
    setFieldPlaceholder("");
    setFieldRequired(true);
  };

  const handleReset = () => {
    setMethodName("");
    setIsDefault(false);
    setFields([]);
    setFieldType(inputTypes[0].value);
    setFieldName("");
    setFieldPlaceholder("");
    setFieldRequired(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just alert the data
    alert(
      JSON.stringify(
        {
          methodName,
          isDefault,
          fields,
        },
        null,
        2
      )
    );
  };

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold mb-4">Withdrawal Methods</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-2">
          <div className="flex-1 w-full">
            <label className="block text-xs text-gray-500 mb-1">Method name <span className="text-red-500">*</span></label>
            <input
              value={methodName}
              onChange={e => setMethodName(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-2 text-sm"
              placeholder="Ex: Bank"
              required
            />
          </div>
          <div className="flex items-center gap-2 min-w-max mt-2 md:mt-7">
            <input
              type="checkbox"
              checked={isDefault}
              onChange={e => setIsDefault(e.target.checked)}
              id="default-method"
              className="accent-teal-600"
            />
            <label htmlFor="default-method" className="text-xs text-gray-500 cursor-pointer">Default method</label>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Input Field Type <span className="text-red-500">*</span></label>
            <select
              value={fieldType}
              onChange={e => setFieldType(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-2 text-sm"
            >
              {inputTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Field name <span className="text-red-500">*</span></label>
            <input
              value={fieldName}
              onChange={e => setFieldName(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-2 text-sm"
              placeholder="Ex: Account name"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Placeholder text <span className="text-red-500">*</span></label>
            <input
              value={fieldPlaceholder}
              onChange={e => setFieldPlaceholder(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-2 text-sm"
              placeholder="Ex: John"
              required
            />
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-7">
            <input
              type="checkbox"
              checked={fieldRequired}
              onChange={e => setFieldRequired(e.target.checked)}
              id="is-required"
              className="accent-teal-600"
            />
            <label htmlFor="is-required" className="text-xs text-gray-500 cursor-pointer">Is required</label>
          </div>
        </div>
        <button
          type="button"
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded font-medium text-sm shadow-sm transition-colors duration-200"
          onClick={handleAddField}
        >
          + Add Fields
        </button>
      </div>

      <div className="flex gap-2 justify-end mt-6">
        <button
          type="button"
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded font-medium"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-medium"
        >
          Submit
        </button>
      </div>

      {/* Show added fields below */}
      {fields.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Added Fields:</h3>
          <div className="space-y-2">
            {fields.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded px-3 py-2 bg-gray-50 flex items-center gap-4">
                <span className="font-semibold text-gray-700">{f.type}</span>
                <span className="text-gray-500">{f.name}</span>
                <span className="text-gray-400 italic">{f.placeholder}</span>
                <span className="text-xs px-2 py-1 rounded bg-gray-200 ml-auto">{f.required ? "Required" : "Optional"}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </form>
  );
};

export default WithdrawMethodCreate;
