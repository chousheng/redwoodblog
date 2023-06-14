import { Form, Label, TextField, TextAreaField, Submit } from '@redwoodjs/forms'

const CommentForm = () => {
  return (
    <div>
      <h3 className="text-lg font-light text-gray-600">Leave a Comment</h3>
      <Form className="mt-4 w-full">
        <Label name="name" className="block text-sm uppercase text-gray-600">
          Name
        </Label>
        <TextField
          name="name"
          className="block w-full rounded border p-1 text-xs "
          validation={{ required: true }}
        />

        <Label
          name="body"
          className="mt-4 block text-sm uppercase text-gray-600"
        >
          Comment
        </Label>
        <TextAreaField
          name="body"
          className="block h-24 w-full rounded border p-1 text-xs"
          validation={{ required: true }}
        />

        <Submit className="mt-4 block rounded bg-blue-500 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white disabled:opacity-50">
          Submit
        </Submit>
      </Form>
    </div>
  )
}

export default CommentForm
