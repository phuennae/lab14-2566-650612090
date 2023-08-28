"use client";
import { Button, Container, Divider, Group, Text, Title } from "@mantine/core";
import { Rating } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Pagination } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">Your rating</Title>

      <Rating size="lg" />

      <Textarea
        mt = "xs"
        minRows={3}
        placeholder="Do you enjoy eating?"
        label="Your review"
      />
      <Button color="orange" mt="xs">Submit Review</Button>

      <Divider my="sm" />

      <Group position="center" mt="xs">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={5} readOnly />
      </Group>

      <Text color="gray" align="center">Best pizza in this world. I give you X score.</Text>

      <Divider my="sm" />

      <Group position="center" mt="xs">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={4} readOnly />
      </Group>
      
      <Text color="gray" align="center">My favourite part is pepperoni</Text>

      <Pagination total={20} my="md" color="orange" position="center" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Phuenpa Champasri 650612090
      </Text>
    </Container>
  );
}
