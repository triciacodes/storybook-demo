# Alchemy Challenges

## Create a story

- Use one of the existing components in `src/components` and create a story
- Good starter components -- `Heading` and `Avatar`
- Note: Can use this url for the avatar `https://randomuser.me/api/portraits/women/17.jpg`

## Create multiple stories for one component

- Use one of the stories in `src/components` to add multiple stories for a component
- Add a new `export const NewStory = Template.bind({})`
- Add a new `args` to change the story control values

```
  export const NewStory = Template.bind({})
  NewStory.args = {
    text: 'New text'
  }
```

## Add props to a component and update story

- Add a couple of new props to a component
- Update `args` in the story with new values for your new props

## Create a new component and story!

- Add a new component in `src/components` (use `NewComponent` as an example)
- Add a story for your component
