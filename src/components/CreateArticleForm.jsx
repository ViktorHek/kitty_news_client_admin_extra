import React from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Input,
  TextArea,
  Message,
} from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import ArticlesServices from "../modules/ArticlesServices";

const CreateArticleForm = () => {
  const dispatch = useDispatch();
  const { createArticleMessage, errorMessage } = useSelector((state) => state);

  return (
    <Container>
      <Header>Create Article</Header>
      <Form
        data-cy="article-form"
        onSubmit={(event) => ArticlesServices.create(event, dispatch)}
      >
        <Form.Field
          data-cy="title-field"
          label="Article title"
          control={Input}
          name="title"
          placeholder="Title"
        />
        <Form.Field
          data-cy="lead-field"
          label="Article lead"
          control={Input}
          name="lead"
          placeholder="Lead"
        />
        <Form.Field
          data-cy="body-field"
          label="Article body"
          control={TextArea}
          name="body"
          placeholder="Body"
        />
        <Form.Field>
          <label for="categories">Choose a category:</label>
          <select
            name="categories"
            id="categories"
            data-cy="categories-dropdown"
          >
            <option value={0}>Select</option>
            <option value={1}>Global Politics</option>
            <option value={2}>Sports</option>
            <option value={3}>Self Care</option>
            <option value={4}>News</option>
            <option value={5}>Culture</option>
          </select>
        </Form.Field>
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
          <Message color="red" size="big" data-cy="api-response-error-message">
            {errorMessage}
          </Message>
        )}
      </Form>
    </Container>
  );
};

export default CreateArticleForm;