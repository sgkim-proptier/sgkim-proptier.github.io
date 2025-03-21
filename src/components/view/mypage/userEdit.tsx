import { FieldError, Input, Label, TextField } from 'react-aria-components';

export default function MyPageUserEdit() {
  return (
    <>
      <div>
        <img src="" alt="" />

        <TextField name="text" type="text" isRequired>
          <Label>Email</Label>
          <Input placeholder="눈떠보니 벼락부자" />
          <FieldError />
        </TextField>

        {/* <Field>
          <Label>닉네임</Label>
          <Input type="text" placeholder="눈떠보니 벼락부자" />
        </Field>
        <Field>
          <Label htmlFor="소개 추가">소개 추가</Label>
          <Textarea
            name=""
            id=""
            placeholder="본인이 하는 일이나 관심사에 대해서 알려주세요."
          ></Textarea>
        </Field> */}
      </div>
    </>
  );
}
