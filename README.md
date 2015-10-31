# Discourse post styles

This plugin allows the user to add css classes to Discourse post content. The styles
add layout rules to `figure` and `div` tags.


![alt tag](https://cloud.githubusercontent.com/assets/2975917/10866203/683837a2-7fe2-11e5-855b-5b764e57c289.png)

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10866204/6e679604-7fe2-11e5-934e-bb123320d4ff.png)

## Installation

Follow the [Install a Plugin](https://meta.discourse.org/t/install-a-plugin/19157) howto, using
`git clone https://github.com/scossar/post-styles` as the plugin command.

Once you've installed it, review the settings under plugins in the admin section of your
forum.

## Use

The plugin wraps uploaded images in `figure` tags. Classes may be added to `div` and 
`figure` tags to give them a width and a float direction.

Here is a list of the available classes and what they do:

- `one-quarter` - sets element width at 25% and floats it to the left
- `one-third` - sets element width at 33.3333% and floats it to the left
- `one-half` - sets element width at 50% and floats it to the left
- `two-thirds` - sets the element width at 66.6666% and floats it to the left
- `three-quarters` - sets the element width at 75% and floats it to the left
- `right`  - adding the `right` class to an element causes it to float to the right
- `end-of-row` - removes the margin from the last element in a row - allows for full grid layouts (see 'full-grid-layout' example)

The class `clear` may be added to `hr` tags. `<hr class="clear">` creates an
invisible horizontal line that can be useful for clearing elements that are floating
up into the row above them. (see 'clearfix' example) (Coming soon!)

The plugin also adds a `figcaption` tag to images. Use this to add captions to your
images.

The plugin currently does not add layout styles to the mobile view. This will be
changed soon.

## Examples:

### Image floated right with wrapping text

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10866422/78152604-7feb-11e5-9e42-296009437e97.png)

This layout is created by adding the classes `one-half right` to the image's `figure` tag.
Here is the markup for the post's image. This was created by, first uploading the desired
image, and then adding `class="one-half right"` to the image's `figure` tag. The
image's caption has also been added to the tag by inserting the text for it between the
`<figcaption></figcaption>` tags.

```
<figure class="one-half right"><img src="/uploads/default/original/1X/80503427f92690168e9dfa531e0025d85411a39f.jpg" width="408" height="500"><figcaption>Stormy night</figcaption></figure>
```
### Floated images with contained text

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10866423/7fb33bbc-7feb-11e5-96bf-36d01c2841d6.png)

This layout is created by placing the images into a `div` that has the class `one-quarter` and then placing
the text in a `div` that has the classes `three-quarters end-of-row`. Here is the markup for the images:

```
<div class="one-quarter">
   
  <figure><img src="/uploads/default/original/1X/c60324c89525b14d3b8394dc17240445ccbb64a6.jpg" width="354" height="500"><figcaption>Magical forest</figcaption></figure>
   
  <figure><img src="/uploads/default/original/1X/ad19ac600dfd551236f9605a0d5254529a0aa621.jpeg" width="204" height="246"><figcaption>The Abyss</figcaption></figure>
   
  <figure><img src="/uploads/default/original/1X/34f358f03d98ee7f097a72e38dc435be1079395d.jpg" width="690" height="387"><figcaption>Three trees</figcaption></figure>
   
</div>
```

Note that no classes have been added to the `figure` tags. They will expand to the full width
of their containg `div`.

Here is the markup for the text `div`:
```
<div class="three-quarters end-of-row">  <!-- text content goes here -->   </div>
```

### A full grid image gallery

![alt tag](https://cloud.githubusercontent.com/assets/2975917/10866424/8504c9aa-7feb-11e5-89a6-06bc93fd596c.png)

This layout is created by uploading the images and then adding the appropriate width classes. The
first row has the class `one-quarter`, the second row has the class `one-third`, the third row has the
class `one-half`, and the last row has the first image set with the class `one-third` and the second
image set with the class `two-thirds`.

In each of the rows, the last figure in the row has the added class `end-of-row`. This is
used to create the appropriate margin on the figure/image and keep it from pushing into the
next row. 

Here is the  markup for the right-most figure/image in the top row:

```
<figure class="one-quarter end-of-row"><img src="/uploads/default/original/1X/3555f63897e27b082a083b398e97fd3ee5c27f29.jpg" width="690" height="459"><figcaption>Curious donkey</figcaption></figure>
```
