import { Avatar } from "@/components/avatar"
import { Email } from "@/components/email"
import { FloatButton } from "@/components/float-button"
import { Input } from "@/components/input"
import { MenuButton } from "@/components/menu-btn"
import { emails } from "@/uteis/emails"
import { View, FlatList, Text } from "react-native"

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton></MenuButton>
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          source={{ uri: "https://github.com/BrunoMazeto4.png" }}
          size="small"
        ></Avatar>
      </Input>

      <FlatList
        data={emails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      ></FlatList>

      <FloatButton icon="edit" />
    </View>
  )
}
