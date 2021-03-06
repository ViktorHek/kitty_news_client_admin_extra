import React, { useState } from 'react'
import {
  Button,
  Modal,
  Form,
  Input,
  TextArea,
  Message,
  Divider,
  Item,
} from 'semantic-ui-react'

import { useDispatch, useSelector } from 'react-redux'
import ArticlesCreation from '../modules/ArticlesCreation'

const CreateArticleForm = () => {
  const dispatch = useDispatch()
  const { createArticleMessage, errorMessage, createFormOpen } = useSelector(
    (state) => state
  )
  const [image, setImage] = useState()
  const [title, setTitle] = useState()
  const [lead, setLead] = useState()
  const [body, setBody] = useState()
  const [category, setCategory] = useState()

  return (
    <Modal
      closeIcon
      onClose={() => dispatch({ type: 'CLOSE_LOGIN_FORM' })}
      onOpen={() => dispatch({ type: 'OPEN_LOGIN_FORM' })}
      open={createFormOpen}
      trigger={
        <Button data-cy="create-article-button" >
          Create Article
        </Button>
      }
    >
      <Modal.Header>Create Article</Modal.Header>
      <Modal.Content>
        <Form
          data-cy="article-form"
          onSubmit={(event) => ArticlesCreation.create(event, dispatch)}
        >
          <Form.Field
            data-cy="title-field"
            label="Article title:"
            control={Input}
            name="title"
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
          />
          <Form.Field
            data-cy="lead-field"
            label="Article lead:"
            control={Input}
            name="lead"
            placeholder="Lead"
            onChange={(event) => setLead(event.target.value)}
          />
          <Form.Field
            data-cy="body-field"
            label="Article body:"
            control={TextArea}
            name="body"
            placeholder="Body"
            onChange={(event) => setBody(event.target.value)}
          />
          <Form.Field>
            <label for="categories">Choose a category:</label>
            <select
              name="categories"
              id="categories"
              data-cy="categories-dropdown"
              onChange={(event) =>
                setCategory(event.target[event.target.value].innerText)
              }
            >
              <option value={0}>Select</option>
              <option value={1}>Global Politics</option>
              <option value={2}>Sports</option>
              <option value={3}>Self Care</option>
              <option value={4}>News</option>
              <option value={5}>Culture</option>
            </select>
          </Form.Field>
          <Form.Input
            name="file_input"
            placeholder="Image"
            type="file"
            label="Image:"
            data-cy="file-input"
            onChange={(event) => setImage(event.target.files[0])}
          />
          <Button
            data-cy="create-article-button"
            type="submit"
            color="teal"
            value="submit"
          >
            Create Article
          </Button>
          {createArticleMessage && (
            <Message
              color="green"
              size="big"
              data-cy="api-response-success-message"
            >
              {createArticleMessage}
            </Message>
          )}
          {errorMessage && (
            <Message
              color="red"
              size="big"
              data-cy="api-response-error-message"
            >
              {errorMessage}
            </Message>
          )}
        </Form>
        <Divider horizontal>Article Preview</Divider>
        <Item.Group>
          <Item data-cy="preview-article-item">
            {image && (
              <Item.Image size="small" src={URL.createObjectURL(image)} />
            )}
            <Item.Content>
              <Item.Header data-cy="preview-title">Title: {title}</Item.Header>
              <Item.Description data-cy="preview-lead">
                Lead: {lead}
              </Item.Description>
              <Item.Description data-cy="preview-body">
                Body: {body}
              </Item.Description>
              <Item.Description data-cy="preview-category">
                Category: {category}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Modal.Content>
    </Modal>
  )
}

export default CreateArticleForm
