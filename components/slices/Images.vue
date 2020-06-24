<template>
  <section class='image-gallery content-section' :class="'image-gallery__'+slice.slice_label">
    <h2>{{ $prismic.asText(slice.primary.name_of_the_gallery) }}</h2>
    <div class="gallery">
      <div v-for="item in slice.items" :key="item.id" class="gallery-item">
        <prismic-image :field="item.gallery_image"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'images'
}
</script>
